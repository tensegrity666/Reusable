'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445557433' },
  { name: 'Cesar', phone: '+380445554433' },
  { name: 'Brut', phone: '+380845554433' },
  { name: 'Neron', phone: '+480445554433' },
  { name: 'Gena Bukin', phone: '+380445554433' },
  { name: 'Ivan', phone: '+380445154433' },
  { name: 'Peter the Great', phone: '+380489554433' },
];

const findPhoneByName = name => {
  for (const obj of phonebook)
    if (obj.name === name) return obj.phone;
};

module.exports = { phonebook, findPhoneByName };
