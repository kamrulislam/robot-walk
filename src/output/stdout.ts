import { PlaceParams } from '../command';


export const reportOnStdout = (placeParam: PlaceParams) => {
    console.log('');
    console.log(placeParam.posX + ', ' + placeParam.posY + ', ' + placeParam.direction);
}