"use client";
import { useEffect } from "react";

export default function ThankYou() {

    useEffect(() => {
        const location = window.location.href;

        setTimeout(() => {
            if (location === "https://mobzway.com/thank-you/#poker-game") {
                window.location.href = "https://demo-poker-mgp.iomhost.com/";
            } else if (location === "https://mobzway.com/thank-you/#rummy-game") {
                window.location.href = "https://demo-rummy-mgp.iomhost.com/";
            } else if (location === "https://mobzway.com/thank-you/#ludo-game") {
                window.location.href = "https://demo-ludo-mgp.iomhost.com/";
            } else {
                window.location.href = "https://demo-mgp.mobzway.com/";
            }
        }, 3000);

    }, []);


    return (
        <>
            {/*?php include 'header.php' ?*/}
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    @media (max-width:767px) {\n        .banner.pokers.position-relative.thank-you-banner {\n  background-position: center !important;\n}\n.welcome_text {\n    font-size: 40px;\n  }\n    }\n"
                }}
            />
            {/* Banner */}
            <section
                className="banner pokers position-relative thank-you-banner"
                style={{
                    background:
                        'url("/assets/images/thank-you-bg1.webp") no-repeat',
                    backgroundSize: "cover",
                    backgroundPosition: "0 -25px"
                }}
            >
                <div className="overlay" />
                <div className="wel_come_container thank_you_welcome_container">
                    <h1 className="welcome_text">THANK YOU!</h1>
                    <h4 className="subtitile">We have received your requirement details!</h4>
                    <p className="sml_text w-100">
                        One of our representatives will get back to you by the next business
                        day.In the meantime, you can try a demo of our product clicking the
                        following link.
                    </p>
                    <div className="btn_outer">
                        <a href="https://demo-mgp.mobzway.com/" className="contact_btn">
                            Check Games Portfolio &amp; Try Demo!!
                        </a>
                        {/* <a href="<?=  $baseurl ?>portfolio/" class="contact_btn">Check Games Portfolio & Try Demo!!</a> */}
                    </div>
                </div>
            </section>
            {/* Games We Provide */}
            {/* <section class="games_weprovide thank_you_games_we_provide">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
              <div class="sub_title_outer aos-init aos-animate" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
                  <h2 class="sub_title">
                      <span class="yellow">Games</span> 
                      <span class="black">We provide</span>
                  </h2>
              </div>
            </div>
            <div class="col-md-12">
                  <ul class="item_outer_block d-flex justify-content-center w-100 flex-wrap">
                      
                      <li class="white_lebel_poker_li">
                          <a href="<?=  $baseurl ?>poker-software/" class="product_page_link">
                              <div class="pro_item">
                                  <div class="pro_inner">
                                      <div class="overlay_item"></div>
                                      <div class="ofr_title"><p>Poker</p></div>
                                      <img src="/assets/images/poker_bg.png" alt="">
                                      <div class="game_icons"><div class="anim_one"><img src="/assets/images/poker_icon.png" alt=""></div></div>
                                  </div>
                              </div>
                          </a>    
                      </li>
                      <li class="white_lebel_poker_li">
                          <a href="<?=  $baseurl ?>rummy-software/" class="product_page_link">
                               <div class="pro_item">
                                  <div class="pro_inner">
                                      <div class="overlay_item"></div>
                                      <div class="ofr_title"><p>Rummy</p></div>
                                      <img src="/assets/images/rummy_bg.png" alt="">
                                      <div class="game_icons"><div class="anim_five"><img src="/assets/images/rummy_icon.png" alt=""></div></div>
                                  </div>
                              </div>
                          </a>    
                      </li>
                      <li class="white_lebel_poker_li">
                          <a href="<?=  $baseurl ?>teen-patti-software/" class="product_page_link">
                               <div class="pro_item">
                                  <div class="pro_inner">
                                      <div class="overlay_item"></div>
                                      <div class="ofr_title"><p>3 Patti</p></div>
                                      <img src="/assets/images/3patti_bg.png" alt="">
                                      <div class="game_icons"><div class="anim_three"><img src="/assets/images/3patti_icon.png" alt=""></div></div>
                                  </div>
                              </div>
                          </a>    
                      </li>
                      <li class="white_lebel_poker_li">
                          <a href="<?=  $baseurl ?>blackjack-game-development/" class="product_page_link">
                              <div class="pro_item">
                                  <div class="pro_inner">
                                      <div class="overlay_item"></div>
                                      <div class="ofr_title"><p>Black Jack</p></div>
                                      <img src="/assets/images/blackjack_bg.png" alt="">
                                      <div class="game_icons"><div class="anim_one"><img src="/assets/images/blacjack_icon.png" alt=""></div></div>
                                  </div>
                              </div>
                          </a>    
                      </li>
                      <li class="white_lebel_poker_li">
                          <a href="<?=  $baseurl ?>baccarat-game-development/" class="product_page_link">  
                              <div class="pro_item">
                                  <div class="pro_inner">
                                      <div class="overlay_item"></div>
                                      <div class="ofr_title"><p>Baccarat</p></div>
                                      <img src="/assets/images/baccrat_bg.png" alt="">
                                      <div class="game_icons"><div class="anim_five"><img src="/assets/images/baccarat_icon.png" alt=""></div></div>
                                  </div>
                              </div>
                          </a>    
                      </li>
                      <li class="white_lebel_poker_li">
                              <div class="pro_item">
                                  <div class="pro_inner">
                                      <div class="overlay_item"></div>
                                      <div class="ofr_title"><p>Dragon Tiger</p></div>
                                      <img src="/assets/images/dragon_bg.png" alt="">
                                      <div class="game_icons"><div class="anim_three"><img src="/assets/images/dragon_icon.png" alt=""></div></div>
                                  </div>
                              </div> 
                      </li>
                      <li class="white_lebel_poker_li">
                          <a href="<?=  $baseurl ?>roulette-game-development/" class="product_page_link">
                              <div class="pro_item">
                                  <div class="pro_inner">
                                      <div class="overlay_item"></div>
                                      <div class="ofr_title"><p>Roulette</p></div>
                                      <img src="/assets/images/roulrtte_bg.png" alt="">
                                      <div class="game_icons"><div class="anim_one"><img src="/assets/images/roulette_icon.png" alt=""></div></div>
                                  </div>
                              </div>
                          </a>    
                      </li>
                      <li class="white_lebel_poker_li">
                          <a href="<?=  $baseurl ?>slot-game-development/" class="product_page_link">
                              <div class="pro_item">
                                  <div class="pro_inner">
                                      <div class="overlay_item"></div>
                                      <div class="ofr_title"><p>Slot</p></div>
                                      <img src="/assets/images/slot_bg.png" alt="">
                                      <div class="game_icons"><div class="anim_five"><img src="/assets/images/slot_icon.png" alt=""></div></div>
                                  </div>
                              </div>
                          </a>    
                      </li>
                      <li class="white_lebel_poker_li">
                          <a href="<?=  $baseurl ?>live-casino-software/" class="product_page_link">
                              <div class="pro_item">
                                  <div class="pro_inner">
                                      <div class="overlay_item"></div>
                                      <div class="ofr_title"><p>Live Casino</p></div>
                                      <img src="/assets/images/live_bg.png" alt="">
                                      <div class="game_icons"><div class="anim_three"><img src="/assets/images/live_icon.png" alt=""></div></div>
                                  </div>
                              </div>
                          </a>    
                      </li>
                      <li class="white_lebel_poker_li">
                          <a href="<?=  $baseurl ?>ludo-game-development/" class="product_page_link">
                              <div class="pro_item">
                                  <div class="pro_inner">
                                      <div class="overlay_item"></div>
                                      <div class="ofr_title"><p>Ludo</p></div>
                                      <img src="/assets/images/ludo_bg.png" alt="">
                                      <div class="game_icons"><div class="anim_one"><img src="/assets/images/ludo_icon.png" alt=""></div></div>
                                  </div>
                              </div>
                          </a>    
                      </li>
                      <li class="white_lebel_poker_li">
                              <div class="pro_item">
                                  <div class="pro_inner">
                                      <div class="overlay_item"></div>
                                      <div class="ofr_title"><p>Sicbo</p></div>
                                      <img src="/assets/images/sicbo_bg.png" alt="">
                                      <div class="game_icons"><div class="anim_five"><img src="/assets/images/sicbo_icon.png" alt=""></div></div>
                                  </div>
                              </div>
                      </li>
                      <li class="white_lebel_poker_li">
                          <a href="<?=  $baseurl ?>keno-game-development/" class="product_page_link">
                              <div class="pro_item">
                                  <div class="pro_inner">
                                      <div class="overlay_item"></div>
                                      <div class="ofr_title"><p>Keno Games</p></div>
                                      <img src="/assets/images/keno_bg.png" alt="">
                                      <div class="game_icons"><div class="anim_three"><img src="/assets/images/keno_icon.png" alt=""></div></div>
                                  </div>
                              </div>
                          </a>    
                      </li>
                      <li class="white_lebel_poker_li">
                          <a href="<?=  $baseurl ?>andar-bahar-game-development/" class="product_page_link">
                              <div class="pro_item">
                                  <div class="pro_inner">
                                      <div class="overlay_item"></div>
                                      <div class="ofr_title"><p>Andar Bahar</p></div>
                                      <img src="/assets/images/andar_bg.png" alt="">
                                      <div class="game_icons"><div class="anim_one"><img src="/assets/images/andar_icon.png" alt=""></div></div>
                                  </div>
                              </div>
                          </a>    
                      </li>
                      <li class="white_lebel_poker_li">
                              <div class="pro_item">
                                  <div class="pro_inner">
                                      <div class="overlay_item"></div>
                                      <div class="ofr_title"><p>Virtual Horse</p></div>
                                      <img src="/assets/images/virtual_bg.png" alt="">
                                      <div class="game_icons"><div class="anim_five"><img src="/assets/images/virtual_icon.png" alt=""></div></div>
                                  </div>
                              </div>
                      </li>
                      <li class="white_lebel_poker_li">
                          <a href="<?=  $baseurl ?>triple-chance-game-development/" class="product_page_link">
                              <div class="pro_item">
                                  <div class="pro_inner">
                                      <div class="overlay_item"></div>
                                      <div class="ofr_title"><p>Triple Chance</p></div>
                                      <img src="/assets/images/triple_bg.png" alt="">
                                      <div class="game_icons"><div class="anim_three"><img src="/assets/images/triple_icon.png" alt=""></div></div>
                                  </div>
                              </div>
                          </a>    
                      </li>
                      <li class="white_lebel_poker_li">
                          <a href="<?=  $baseurl ?>texas-holdem-poker/" class="product_page_link">
                              <div class="pro_item">
                                  <div class="pro_inner">
                                      <div class="overlay_item"></div>
                                      <div class="ofr_title"><p>Texas Holdem</p></div>
                                      <img src="/assets/images/offer-four.png" alt="">
                                      <div class="game_icons"><div class="anim_one"><img src="/assets/images/provide_1.png" alt=""></div></div>
                                  </div>
                              </div>
                          </a>    
                      </li>
                      <li class="white_lebel_poker_li">
                          <a href="<?=  $baseurl ?>omaha-poker-game-development/" class="product_page_link">    
                              <div class="pro_item">
                                  <div class="pro_inner">
                                      <div class="overlay_item"></div>
                                      <div class="ofr_title"><p>Omaha Poker</p></div>
                                      <img src="/assets/images/c_bg_one.png" alt="">
                                      <div class="game_icons"><div class="anim_two"><img src="/assets/images/provide_2.png" alt=""></div></div>
                                  </div>
                              </div>
                          </a>
                      </li>
                      <li class="white_lebel_poker_li">
                          <a href="<?=  $baseurl ?>ofc-poker-game-development/" class="product_page_link">
                              <div class="pro_item">
                                  <div class="pro_inner">
                                      <div class="overlay_item"></div>
                                      <div class="ofr_title"><p>OFC Poker</p></div>
                                      <img src="/assets/images/offer_two.png" alt="">
                                      <div class="game_icons"><div class="anim_three"><img src="/assets/images/provide_3.png" alt=""></div></div>
                                  </div>
                              </div>
                          </a>    
                      </li>
                      <li class="white_lebel_poker_li">
                          <a href="<?=  $baseurl ?>seven-stud-poker/" class="product_page_link">    
                              <div class="pro_item">
                                  <div class="pro_inner">
                                      <div class="overlay_item"></div>
                                      <div class="ofr_title"><p>Seven Stud Poker</p></div>
                                      <img src="/assets/images/offer_three.png" alt="">
                                      <div class="game_icons"><div class="anim_one"><img src="/assets/images/provide_4.png" alt=""></div></div>
                                  </div>
                              </div>
                          </a>   
                      </li>
                      
                      <li class="white_lebel_poker_li">
                              <div class="pro_item">
                                  <div class="pro_inner">
                                      <div class="overlay_item"></div>
                                      <div class="ofr_title"><p>5 CARDS OMAHA</p></div>
                                      <img src="/assets/images/offer_five.png" alt="">
                                      <div class="game_icons"><div class="anim_three"><img src="/assets/images/provide_6.png" alt=""></div></div>
                                  </div>
                              </div>
                      </li>

                      
                  </ul>
                      
            </div>    
        </div>
    </div>
  </section> */}
            {/*?php include 'footer.php' ?*/}
        </>

    )
}
