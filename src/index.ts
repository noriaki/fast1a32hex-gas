import { fast1a32hex } from 'fnv-plus';

const main = () => {
  const rarity = 5;
  const name = '賈詡';
  const country = '魏';
  const id = fast1a32hex(`☆${rarity}・${name}・${country}`);
  Logger.log(`☆${rarity}・${name}・${country} : ${id}`);
};