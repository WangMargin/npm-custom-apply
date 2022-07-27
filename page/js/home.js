
const scene = new L7.Scene({
    id: 'map',
    map: new L7.Earth({})
});
const mapImg = ('../img/map.jpg')
const earthlayer = new L7.EarthLayer()
    .source(mapImg,
        {
            parser: {
                type: 'image'
            }
        }
    )
    .shape('fill')
    .style({
        opacity: 1.0,
        radius: 20,
        globelOtions: {
            ambientRatio: 0.6, // 环境光
            diffuseRatio: 0.4, // 漫反射
            specularRatio: 0.1 // 高光反射
        }
    })
    .animate(true);


// 飞线图
const atomLayer = new L7.EarthLayer()
    .color('#2E8AE6')
    .shape('atomSphere')
    .style({
        opacity: 1
    });

const bloomLayer = new L7.EarthLayer().color('#fff').shape('bloomSphere')
    .style({
        opacity: 0.7
    });

scene.on('loaded', () => {
    scene.addLayer(earthlayer);

    // fetch('../json/lineLayer.json')
    //     .then(res => res.json())
    //     .then(flydata => {
    //         const flyLine = new L7.LineLayer({ blend: 'normal' })
    //             .source(flydata, {
    //                 parser: {
    //                     type: 'json',
    //                     coordinates: 'coord'
    //                 }
    //             })
    //             .color('#bb133e') // 线条背景色
    //             .shape('arc3d')
    //             .size(0.1)
    //             .active(true)
    //             .animate({
    //                 interval: 2,
    //                 trailLength: 1,
    //                 duration: 1
    //             })
    //             .style({
    //                 opacity: 1,
    //                 segmentNumber: 60,
    //                 globalArcHeight: 10
    //             });
    //         scene.addLayer(flyLine);
    //     });


    fetch('../json/cricle.json')
        .then(res => res.json())
        .then(data => {
            const pointlayer = new L7.PointLayer()
                .source(data,
                    {
                        parser: {
                            type: 'json',
                            x: 'lng',
                            y: 'lat'
                        }
                    }
                )
                .shape('circle')
                .color('#f00')
                .size(10)
                .active(true);
            scene.addLayer(pointlayer);
        });


    fetch('../json/earth.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const pointlayer = new L7.PointLayer()
                .source(data,
                    {
                        parser: {
                            type: 'json',
                            x: 'lng',
                            y: 'lat'
                        }
                    }
                )
                .shape('cylinder')
                .color('#f00')
                .size('', () => [ 1, 1, 20 ])
                .active(true);
            scene.addLayer(pointlayer);
        });

    scene.addLayer(atomLayer);
    scene.addLayer(bloomLayer);

    earthlayer.setEarthTime(4.0);
});
