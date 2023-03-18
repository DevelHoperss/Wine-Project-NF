//funzione che cambia lingua al sito
function changeLanguage(lang){
    location.hash=lang;
    location.reload();
}

let language={
    en:{
        bottled: 'Bottled at the origin by',
        //follow:'Follow us on our Instagram page',
        productionArea: 'Production Area',
        location: 'Location: Matine, in the territory of Mottola',
        soil:'Soil: Clayey, rich in gravel',
        system: 'Training system: Guyot',
        grape: 'Grape varieties: 100% Primitivo',
        yield: 'Yield per hectare',
        harvest : 'Harvest time: First decade of September',
        manualHarvest: 'Harvesting: Manual',
        wineMaking : 'Winemaking and aging',
        description : 'Primitivo grapes are manually harvested in small crates and ferment for about 7 days in cellar. After that, the wine is aged in small stainless steel tanks. Before sale, it rests in the bottle for about 2 months.',
        charac : 'Organoleptic Characteristics',
        color: 'Color: Purple red',
        nose: 'Nose: Fruity with notes of blueberry, cherry, and plum',
        taste: 'Taste: Fresh and soft taste, enveloping, good structure, and ready to drink',
        alcohol: 'Alcohol content',
        temp : 'Serving temperature',
        aboutUs : 'About Us',
    },
    
    es:{
        bottled: 'Embotellado en origen por',
        //follow:'Síguenos en Instagram',
        productionArea: 'Area de Producción',
        location: 'Ubicación: Matine, en el territorio de Mottola',
        soil:'Suelo: Arcilloso, rico en grava',
        system: 'Sistema de cultivo: Guyot',
        grape: 'Variedades de uva: 100% Primitivo',
        yield: 'Rendimiento por hectárea',
        harvest: 'Tiempo de cosecha: Primera década de septiembre',
        manualHarvest: 'Cosecha: Manual',
        wineMaking: 'Vinificación y envejecimiento',
        description: 'Las uvas Primitivo se cosechan manualmente en pequeñas cajas y se llevan a la bodega donde fermentan durante 7 días. El vino envejece, después, en pequeños tanques de acero inoxidable. Antes de ser puesto en venta, descansa en la botella durante aproximadamente 2 meses.',
        charac: 'Características organolépticas',
        color: 'Color: Rojo púrpura.',
        nose: 'Olfato: Frutal con notas de arándano, cereza y ciruela',
        taste: 'Gusto: Sabor fresco y suave, envolvente, buena estructura y listo para beber.',
        alcohol: 'Contenido de alcohol',
        temp: 'Temperatura de servicio',
        aboutUs: 'Dicen de nosotros',
    },
};

if (window.location.hash) {
    
    
    if (window.location.hash == "#es") {
        bottled.textContent = language.es.bottled;
        //follow.textContent = language.es.follow;
        productionArea.textContent = language.es.productionArea;
        location.textContent = language.es.location;
        soil.textContent = language.es.soil;
        system.textContent = language.es.system;
        grape.textContent = language.es.grape;
        yield.textContent = language.es.yield;
        harvest.textContent = language.es.harvest;
        manualHarvest.textContent = language.es.manualHarvest;
        wineMaking.textContent = language.es.winemaking;
        description.textContent = language.es.description;
        charac.textContent = language.es.charac;
        color.textContent = language.es.color;
        nose.textContent = language.es.nose;
        taste.textContent = language.es.taste;
        alcohol.textContent = language.es.alcohol;
        temp.textContent = language.es.temp;
        aboutUs.textContent = language.es.aboutUs;
        
    }else if(window.location.hash=="#en"){
        bottled.textContent = language.en.bottled;
        //follow.textContent = language.en.follow;
        productionArea.textContent = language.en.productionArea;
        location.textContent = language.en.location;
        soil.textContent = language.en.soil;
        system.textContent = language.en.system;
        grape.textContent = language.en.grape;
        yield.textContent = language.en.yield;
        harvest.textContent = language.en.harvest;
        manualHarvest.textContent = language.en.manualHarvest;
        wineMaking.textContent = language.en.winemaking;
        description.textContent = language.en.description;
        charac.textContent = language.en.charac;
        color.textContent = language.en.color;
        nose.textContent = language.en.nose;
        taste.textContent = language.en.taste;
        alcohol.textContent = language.en.alcohol;
        temp.textContent = language.en.temp;
        aboutUs.textContent = language.en.aboutUs;
    }
}
