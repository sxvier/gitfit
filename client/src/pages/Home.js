import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "../components/main.css"

export default function Home() {
    return (
        <div className="App p-5">
            <div className="container p-5">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://www.heart.org/-/media/images/healthy-living/fitness/breakingdownbarriersfitness.jpg?h=417&w=740&la=en&hash=05A33CC555DD4A74704829A0F12D6EDA7DAE2F7D" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Workout</h5>
                                <p>Save your workouts</p>
                                <p>GitFit allows you to save your workouts easily.You are able to add the name of the workout, how many reps you did and the date you did the workout. That way you can always come back and if if you like a particular workout or routine, you can come back to it and try to do more reps and improve yourself.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/meal-prep-lunch-box-containers-with-baked-salmon-royalty-free-image-1599070414.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Eat</h5>
                                <p>Record your meals</p>
                                <p>When you want to remember a certain dish you with your workout. GitFit allows you record your meals.You can save whether it was breakfast lunch or dinner, you save the name of the meal and how many servings you had.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.fastweb.com/uploads/article_photo/photo/2036397/crop635w_20-ways-to-improve-you-this-summer.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Improve</h5>
                                <p>Come back for more</p>
                                <p>Saving your workout and meals allows you to always what remember what you did and gives you the chance to improve. You can always come back and see what workout you did and every time you add a new workout you are able to improve that specific workout.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.seekpng.com/png/full/454-4543385_coming-soon-i-m-on-break-sign.png" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Coming soon</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                                <p>Calorie Counter and Run Creator with an incorporated map</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}


