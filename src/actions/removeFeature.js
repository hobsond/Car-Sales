export const RemoveFeature = 'RemoveFeature';

export function removeFeature(feature) {
    return {
        type: RemoveFeature,
        payload: feature
    }

}