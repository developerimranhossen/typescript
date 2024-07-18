let mySt: any = '12';

    let final = (mySt as number).indexOf(2);
    
    console.log(final); // 1


    // types

    type employe = {
        id: number | string,
        name?: string

    }

    const imran: employe = {
        id: 1234,
        name: "imran",
       
    }

    type book = {
        IM: number,
        name: string

    }
    type author = {
        haha: string,
        isFav: boolean,
    }

    const bookWriter: (book & author) = {
        
        IM: 12,
        name: "imran",
        haha: "bla bla",
        isFav: true,


    }

    //-----

    type startWithImran = `Imran${string}`;

    const myName: startWithImran = "Imran-hossen"

    type User = {
        sessionId: string;
        name: string;
    }


    // to omiting type property
    type Guest = Omit<User, "name">