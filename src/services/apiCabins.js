import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {

    const { data, error } = await supabase.from('cabins').select('*');

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }


    return data;

}

export async function deleteCabin(id) {

    const { error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id);

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be deleted");
    }

    return null;
}

export async function createEditCabin(newCabin, id) {
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "")
    const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;


    //1. Create cabin
    let query = supabase.from("cabins");
    // A) create
    if (!id) query = query.insert([{ ...newCabin, image: imagePath }])

    // B) edit
    if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

    const { data, error } = await query.select().single();

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be created");
    }

    if (hasImagePath) return data;
    
    //2. Upload image if successful
    const { error: stoargeError } = await supabase
        .storage
        .from('cabin-images')
        .upload(imageName, newCabin.image);

    //3. Delete the cabin if there was an error uploading image
    if (stoargeError) {
        await supabase.from("cabins").delete().eq("id", data.id);
        console.error(stoargeError);
        throw new Error("Cabin image couldn't be uploaded and the cabin was not created");
    }

    return data;
}