'use strict';

const phonebook = {
  'Marcus Aurelius': '+380445557433',
  'Cesar': '+380445554433',
  'Brut': '+380845554433',
  'Neron': '+480445554433',
  'Gena Bukin': '+380445554433',
  'Ivan': '+380445154433',
  'Peter the Great': '+380489554433'
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
