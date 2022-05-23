import axios from "axios";

const Reportes = async ()  => {
  // let pdfmake: PdfmakeService
  // pdfmake.create();
 
  //   // Configure text styles  
  //   pdfmake.configureStyles({ header: { fontSize: 18, bold: true } });
 
  //   // Add a text with style
  //   pdfmake.addText('This is a header, using header style', 'header');
 
  //   // Add a text with custom style
  //   pdfmake.addText('This is a header, using a custom style', { fontSize: 16, bold: true });
 
  //   // Add simple text
  //   pdfmake.addText('This is an sample PDF printed with pdfMake');
 
  //   // Add large text
  //   pdfmake.addText('Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines');
 
  //   // Array with colums
  //   const columns = [
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.',
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.',
  //   ];
 
  //   // Add columns
  //   pdfmake.addColumns(columns);
 
  //   // List to add
  //   const list1 = ['item 1', 'item 2', 'item 3'];
  //   const list2 = ['item 1', 'item 2', 'item 3'];
  //   const list3 = ['item 1', 'item 2', 'item 3'];
  //   const list4 = ['item 1', 'item 2', 'item 3'];
 
  //   // Adding unordered list
  //   pdfmake.addUnorderedlist(list1);
 
  //   // Adding ordered list
  //   pdfmake.addOrderedList(list2);
 
  //   // Adding reversed oredered list
  //   pdfmake.addOrderedList(list3, true);
 
  //   // Adding ordered list starting at 50
  //   pdfmake.addOrderedList(list4, false, 50);
 
  //   // Add image from url
  //   pdfmake.addImage('http://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png');
 
  //   // Add image from url using custom width and height.
  //   pdfmake.addImage('http://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png', 300, 150);
 
  //   // Add image from localhost and using width
  //   pdfmake.addImage('http://localhost:4200/assets/daniel.jpg', 200);
  //   pdfmake.download('comun')
}
const tabla= async ()  =>  {
  // let pdfmake: PdfmakeService
  // // Create Headers cells
  // const header1 = new Cell('Header1');
  // const header2 = new Cell('Header2');
  // const header3 = new Cell('Header3', { fillColor: '#cecece' });

  // // Create headers row
  // const headerRows = new Row([header1, header2, header3]);

  // // Create a content row
  // const row1 = new Row([new Cell('One value goes here '), new Cell('Another one here'), new Cell('OK?')]);

  // // Custom  column widths
  // const widths = [100, '*', 200, '*'];

  // // Create table object
  // const table = new Table(headerRows, [row1], widths);

  // // Add table to document
  // pdfmake.addTable(table);
  // pdfmake.download('tabla')
}
export {
  Reportes,
  tabla
}