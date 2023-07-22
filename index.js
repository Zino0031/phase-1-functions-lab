function distanceFromHqInBlocks(pickup){
const headquarters = 42;
return Math.abs(pickup-headquarters);
}

function distanceFromHqInFeet(pickup) {
//   return distanceFromHqInBlocks(pickup) * 264;
const block = distanceFromHqInBlocks(pickup);
const distinblocks = 264;
return block * distinblocks;
}
  
function distanceTravelledInFeet(pickup, destination) {
    const distinblocks = 264;
const travelled = destination - pickup;
return Math.abs(travelled * distinblocks);
}
  
function calculatesFarePrice(pickup, destination) {
   const feet = distanceTravelledInFeet(pickup, destination);

    if (feet <= 400){
        return 0;
    }else if (feet >= 400 && feet <=2000){
        return (feet-400)*0.02;
    }else if (feet > 2000 && feet <= 2500) {
        return 25;
    }else if (feet >= 2500) {
        return "cannot travel that far";
    }


}

