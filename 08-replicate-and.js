{ console.log('   replicate and: https://goo.gl/dTYiva');

  const values = [[0,1], [1,0], [0,false], [1,12], ['',' '], [' ','']];
  console.log('values: ', values);

  for (let value of values) {
    const a = value[0];
      console.log({a, classification: Boolean(a)+'y'});
    const b = value[1];
      console.log({b, classification: Boolean(b)+'y'});

    const or = a && b;
      console.log({or});

    let replication; 
    if (a) {
      replication = b;
    } else {
      replication = a;
    };
      console.log({replication});


    console.log('\n');
  };

  console.log('   replicate and: https://goo.gl/dTYiva');
}