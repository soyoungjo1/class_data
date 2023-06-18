const objarray = [
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' },
];

for (const i in objarray) {
  console.log('v-for 지시자는', objarray[i]);
}

// i == {text, value}
for (const { text, value } of objarray) {
  console.log('v-for 지시자는', text, value);
}
