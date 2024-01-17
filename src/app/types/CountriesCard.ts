export interface CountriesCard {
    item: string
    name:{common:string, official:string}  ,
    population:number
    capital:string
    region:string
    flags:{
        png:string
    }, 
    flag?:string
}