import PartType from '@entities/part-type-enum';
import Stats from '@entities/stats';
import DriverSize from '@entities/driver-size';
import getImageUrl from '@utils/getImageUrl';

const data: Stats[] = [
    { name: 'Mario', size: DriverSize.Medium } as Stats,
    { name: 'Luigi', size: DriverSize.Medium } as Stats,
    { name: 'Peach', size: DriverSize.Medium } as Stats,
    { name: 'Daisy', size: DriverSize.Medium } as Stats,
    { name: 'Rosalina', size: DriverSize.Large } as Stats,
    { name: 'Tanooki Mario', size: DriverSize.Medium } as Stats,
    { name: 'Cat Peach', size: DriverSize.Medium } as Stats,
    { name: 'Yoshi', size: DriverSize.Medium } as Stats,
    { name: 'Toad', size: DriverSize.Small } as Stats,
    { name: 'Koopa Troopa', size: DriverSize.Small } as Stats,
    { name: 'Shy Guy', size: DriverSize.Small } as Stats,
    { name: 'Lakitu', size: DriverSize.Small } as Stats,
    { name: 'Toadette', size: DriverSize.Small } as Stats,
    { name: 'King Boo', size: DriverSize.Large } as Stats,
    { name: 'Baby Mario', size: DriverSize.Small } as Stats,
    { name: 'Baby Luigi', size: DriverSize.Small } as Stats,
    { name: 'Baby Peach', size: DriverSize.Small } as Stats,
    { name: 'Baby Daisy', size: DriverSize.Small } as Stats,
    { name: 'Baby Rosalina', size: DriverSize.Small } as Stats,
    { name: 'Metal Mario', size: DriverSize.Medium } as Stats,
    { name: 'Pink Gold Peach', size: DriverSize.Medium } as Stats,
    { name: 'Wario', size: DriverSize.Large } as Stats,
    { name: 'Waluigi', size: DriverSize.Large } as Stats,
    { name: 'Donkey Kong', size: DriverSize.Large } as Stats,
    { name: 'Bowser', size: DriverSize.Large } as Stats,
    { name: 'Dry Bones', size: DriverSize.Small } as Stats,
    { name: 'Bowser Jr', size: DriverSize.Small } as Stats,
    { name: 'Dry Bowser', size: DriverSize.Large } as Stats,
    { name: 'Lemmy', size: DriverSize.Small } as Stats,
    { name: 'Larry', size: DriverSize.Small } as Stats,
    { name: 'Wendy', size: DriverSize.Small } as Stats,
    { name: 'Ludwig', size: DriverSize.Medium } as Stats,
    { name: 'Iggy', size: DriverSize.Medium } as Stats,
    { name: 'Roy', size: DriverSize.Large } as Stats,
    { name: 'Morton', size: DriverSize.Large } as Stats,
    { name: 'Inkling Girl', size: DriverSize.Medium } as Stats,
    { name: 'Inkling Boy', size: DriverSize.Medium } as Stats,
    { name: 'Link', size: DriverSize.Large } as Stats,
    { name: 'Villager (male)', size: DriverSize.Medium } as Stats,
    { name: 'Villager (female)', size: DriverSize.Medium } as Stats,
    { name: 'Isabelle', size: DriverSize.Small } as Stats,
    { name: 'Mii (Light)', size: DriverSize.Small } as Stats,
    { name: 'Mii (Medium)', size: DriverSize.Medium } as Stats,
    { name: 'Mii (Heavy)', size: DriverSize.Large } as Stats
];

data.forEach(item => item.imageUrl = getImageUrl(item, PartType.Driver));

export default data;