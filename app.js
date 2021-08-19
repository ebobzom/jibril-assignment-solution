function chessBoard(width, height){
    'use strict'

    // get base string
    let baseString =  ``;
    let count = 0;

    for(let i = 0; i < width; i++){
        if(count === 0){
            baseString += '#';
            count += 1;
        }else{
            baseString += ` `;
            count = 0;
        }
    }

    // reverse base string
    let reversedBaseStringPlaceholder1 = baseString.replaceAll(' ', 'z');
    let reversedBaseStringPlaceholder2 = reversedBaseStringPlaceholder1.replaceAll('#', ' ');
    let reversedBaseString = reversedBaseStringPlaceholder2.replaceAll('z', `#`);

    // forming the grid
    let finalResult = ``;
    let finalResultCount = 0;

    for(let j = 0; j < height; j++){
        if(finalResultCount === 0){
            finalResult += `${baseString}\n`;
            finalResultCount++;
        }else{
            finalResult += `${reversedBaseString}\n`;
            finalResultCount = 0;
        }
    }
    console.log(finalResult);
}
console.log(chessBoard(7, 9))