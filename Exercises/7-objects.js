'use strict';

const fn = () => {
  let obj2 = { name: 'Marcus' };

  obj2.name = 'Aurelius';

  obj2 = { name: 'Marcus Aurelius' };
};

module.exports = { fn };
