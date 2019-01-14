const users = [
	{ id: 1, name: 'moe' },
	{ id: 2, name: 'larry', managerId: 1},
	{ id: 3, name: 'curly', managerId: 2 },
	{ id: 4, name: 'shep', managerId: 1 },
	{ id: 5, name: 'groucho', managerId: 4}
];

function showManagementStructure(list) {
  const finalList = list.map((val) => {
    if (!val.managerId) {
      val.subordinateOffset = '';
      return val.name;
    } else {
        val.subordinateOffset = '  ' + list.find((manager) => manager.id === val.managerId).subordinateOffset;
      return (`${val.subordinateOffset} - ${val.name}`);
    }
  })
  console.log(finalList.join('\n'));
}

showManagementStructure(users);
