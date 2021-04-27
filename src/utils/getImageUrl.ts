import PartType from '@entities/part-type-enum';
import Stats from '@entities/stats';

const getImageUrl = (stats: Stats, partType: PartType) => `/public/images/${partType.toString()}/${stats.name}.png`;

export default getImageUrl;