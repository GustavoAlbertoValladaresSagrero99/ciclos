class Ciclos
{
    constructor()
    {

    }

    getFactor(num)
    {
        let total = 1; 
        for (let i=1; i<=num; i++) {
            total = total * i; 
        }
        return total; 
    }

    serieS(num)
    {
        console.log("### Resultados de serie S: hasta el numero " + num);
        let S = 4;
        let incremento = 3;
        console.log("s = 4");
        for(let i = 1; i <= num; i++)
        {
            if(i%2 == 0)
            {
                console.log(`s = + (4 / ${incremento})`);
                S += (4 / incremento);
                incremento  += 2;
            }else
            {
                console.log(`s = - (4 / ${incremento})`);
                S -= (4 / incremento);
                incremento  += 2;
            }
        }

        return S;
    }


    serieE(num)
    {
        console.log("### Resultados de serie E: hasta el numero " + num);
        let e = 1;
        console.log("e = 1");
        for(let i = 1; i <= num; i++)
        {
            console.log(`e = + 1/${i}!`);
            e += (1 / this.getFactor(i));
        }

        return e;
    }
}


let app = new Ciclos();

console.log(app.serieS(6));
console.log(app.serieE(6));