// code your solution here
function superbowlWin(array){
    const win = array.find(record => record.result === "W")


    return (win === undefined)? win: win.year;
}