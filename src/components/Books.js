const books = [
    {
        key: 1,
        image: "https://pictures.abebooks.com/isbn/9780553176988-us.jpg",
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        newPrice: "Rs. 274",
        oldPrice: "Rs. 700", 
        about: "Was there a beginning of time? Could time run backwards? These are just some of the questions considered in an internationally acclaimed masterpiece by one of the world's greatest thinkers."
    },
    {
        key: 2,
        image: "https://assets.brightspot.abebooks.a2z.com/dims4/default/05b8556/2147483647/strip/true/crop/225x338+0+1/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F6a%2F30%2F0d2a35c452d6878bc791daa3fc32%2Fanne-frank.jpg",
        title: "The Diary of a Young Girl",
        author: "Anne Frank",
        newPrice: "Rs. 274",
        oldPrice: "Rs. 700",
        about: "Discovered in the attic in which she spent the last years of her life, Anne Frank's remarkable diary has become a world classic - a powerful reminder of the horrors of war and an eloquent testament to the human spirit." 
    },
    {
        key: 3,
        image: "https://assets.brightspot.abebooks.a2z.com/dims4/default/714ddf6/2147483647/strip/true/crop/225x338+0+1/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F4e%2Fa5%2F940416d11755ef753df4e359e523%2Fbeauty-myth.jpg",
        title: "The Beauty Myth",
        author: "Naomi Wolf",
        newPrice: "Rs. 274",
        oldPrice: "Rs. 700",
        about: "The bestselling classic that redefined our view of the relationship between beauty and female identity." 
    },
    {
        key: 4,
        image: "https://assets.brightspot.abebooks.a2z.com/dims4/default/c2378e2/2147483647/strip/true/crop/225x338+0+1/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F42%2Fdb%2F89a45f0e4f9427306dd2bd9e8940%2Fhawk.jpg",
        title: "H is For Hawk",
        author: "Helen Macdonald",
        newPrice: "Rs. 274",
        oldPrice: "Rs. 700",
        about: "Helen Macdonald's story of adopting and raising one of nature's most vicious predators has soared into the hearts of millions of readers worldwide." 
    },
    {
        key: 5,
        image: "https://assets.brightspot.abebooks.a2z.com/dims4/default/1844a91/2147483647/strip/true/crop/225x338+0+1/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F63%2Fd1%2Fbf1128809f443d908ce2b808e1e0%2Fout-africa.jpg",
        title: "Out of Africa",
        author: "Isak Dinesen",
        newPrice: "Rs. 274",
        oldPrice: "Rs. 700",
        about: "In this book, the author of Seven Gothic Tales gives a true account of her life on her plantation in Kenya." 
    },
    {
        key: 6,
        image: "https://assets.brightspot.abebooks.a2z.com/dims4/default/d25a343/2147483647/strip/true/crop/225x338+0+1/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F1c%2F61%2F3f23fbcb01eb4c022cbad960fe01%2Ffever-pitch.jpg",
        title: "Fever Pitch",
        author: "Nick Hornby",
        newPrice: "Rs. 274",
        oldPrice: "Rs. 700",
        about: "In America, it is soccer. But in Great Britain, it is the real football. No pads, no prayers, no prisoners. And that's before the players even take the field." 
    },
    {
        key: 7,
        image: "https://assets.brightspot.abebooks.a2z.com/dims4/default/c16549a/2147483647/strip/true/crop/225x338+0+1/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F2f%2F92%2F2001a50da97fcf6d97d07773b197%2Fmoveable-feast.jpg",
        title: "A Moveable Feast",
        author: "Ernest Hemingway",
        newPrice: "Rs. 274",
        oldPrice: "Rs. 700",
        about: "A Moveable Feast brilliantly evokes the exuberant mood of Paris after World War I and the unbridled creativity and unquenchable enthusiasm that Hemingway himself epitomized." 
    },
    {
        key: 8,
        image: "https://assets.brightspot.abebooks.a2z.com/dims4/default/02c6811/2147483647/strip/true/crop/225x338+0+1/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2Fcc%2Fd0%2Fb49ac04b0a32c7cc0615ebc5aa32%2Fdreams-father.jpg",
        title: "Dreams From My Father",
        author: "Barack Obama",
        newPrice: "Rs. 274",
        oldPrice: "Rs. 700",
        about: "In this lyrical, unsentimental, and compelling memoir, the son of a black African father and a white American mother searches for a workable meaning to his life as a black American." 
    },
    {
        key: 9,
        image: "https://assets.brightspot.abebooks.a2z.com/dims4/default/b5abb04/2147483647/strip/true/crop/225x338+0+1/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2Ff2%2F4d%2Fadf2e02f9cee7fd4fa9d586b61ae%2Funbroken.jpg",
        title: "Unbroken",
        author: "Laura Hillenbrand",
        newPrice: "Rs. 274",
        oldPrice: "Rs. 700",
        about: "Driven to the limits of endurance, Zamperini would answer desperation with ingenuity; suffering with hope, resolve, and humor; brutality with rebellion. His fate, whether triumph or tragedy, would be suspended on the fraying wire of his will." 
    },
    {
        key: 10,
        image: "https://assets.brightspot.abebooks.a2z.com/dims4/default/4567a18/2147483647/strip/true/crop/225x338+0+1/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F06%2F93%2Fbceb5350eb9b97a3fd340a45f132%2Fbossypants.jpg",
        title: "Bossypants",
        author: "Tina Fey",
        newPrice: "Rs. 274",
        oldPrice: "Rs. 700",
        about: "Before Liz Lemon, before Weekend Update, before Sarah Palin, Tina Fey was just a young girl with a dream: a recurring stress dream that she was being chased through a local airport by her middle school gym teacher. She also had a dream that one day she would be a comedian on TV." 
    },
    {
        key: 11,
        image: "https://assets.brightspot.abebooks.a2z.com/dims4/default/8d4d3d5/2147483647/strip/true/crop/225x338+0+1/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F59%2Fb9%2Ffee1364bbb486b80cf40df30009a%2Fblink.jpg",
        title: "Blink",
        author: "Malcolm Gladwell",
        newPrice: "Rs. 274",
        oldPrice: "Rs. 700",
        about: "Blink is a book about how we think without thinking, about choices that seem to be made in an instant-in the blink of an eye-that actually aren't as simple as they seem." 
    },
    {
        key: 12,
        image: "https://assets.brightspot.abebooks.a2z.com/dims4/default/86dcfec/2147483647/strip/true/crop/225x338+0+1/resize/253x380!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F6a%2F5c%2Ff18078198a5cce270efc448d0ccb%2Fwild-swans.jpg",
        title: "Wild Swans",
        author: "Jung Chang",
        newPrice: "Rs. 274",
        oldPrice: "Rs. 700",
        about: "The story of three generations in twentieth-century China that blends the intimacy of memoir and the panoramic sweep of eyewitness history." 
    },

]

export default books;