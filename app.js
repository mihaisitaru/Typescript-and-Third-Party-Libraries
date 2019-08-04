// declare var $: any
// better solution: create *.d.ts file (or npm install them) for declaration purpose,
// typescript will automatically consider such files
$('button').click(function () {
    console.log('Button clicked!');
});
