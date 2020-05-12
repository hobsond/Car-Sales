export const AddFeature = 'AddFeature';

export function addFeature(newFeatue){
    return{
        type:AddFeature,
        payload:newFeatue
    }
    
}