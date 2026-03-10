<?php

/**
Template Name: R-454c Landing Page
Template Post Type: post, page
 */
?>
<?php get_template_part('parts/header'); ?>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">

<style>
    :root {
        /* --primary-text-color: #333333;
        --secondary-text-color: #666666;
        --accent-text-color: #2c5aa0;
        --light-text-color: #999999; */
        --white-text-color: #ffffff;
        --white-background-color: #ffffff;
        --blue-text-color: #00447C;
        --blue-background-color: #00447C;
        --green-text-color: #62BB20;
        --light-gray-background-color: #F2F2F2;
        --light-blue-background-color: #D9E3EB;
        --light-beige-background-color: #E7F5DE;

        --font-size-xs: 0.75rem;
        --font-size-sm: 0.875rem;
        --font-size-base: 1rem;
        --font-size-lg: 1.125rem;
        --font-size-xl: 1.25rem;
        --font-size-2xl: 1.5rem;
        --font-size-3xl: 1.875rem;
        --font-size-4xl: 2.25rem;
        --font-size-5xl: 3rem;

        --primary-font: 'Montserrat', sans-serif;
        --seconday-font: 'Roboto', sans-serif;

    }

    html,
    body {
        scroll-behavior: smooth;
    }

    body {
        background-color: var(--white-background-color);
    }

    .r-454c {
        margin-top: 8rem;
        font-family: var(--primary-font);
        line-height: normal;

        h1 {
            color: var(--blue-text-color);
            font-size: var(--font-size-5xl);
            font-weight: 900;
            margin: 1rem 0;
        }

        h2 {
            font-size: var(--font-size-3xl);
            font-weight: 700;
            margin-bottom: 1rem;
        }

        h3 {
            font-size: var(--font-size-2xl);
            font-weight: normal;
            font-style: oblique;
        }

        .blue-text {
            color: var(--blue-text-color);
        }

        .white-text {
            color: var(--white-text-color);
        }

        .green-text {
            color: var(--green-text-color);
        }

        .hero {
            max-width: 1600px;
            width: 90%;
            display: flex;
            margin: 0 auto 4rem auto;
            justify-content: center;
            align-items: center;

            div {
                flex-basis: 50%;
            }

            button {
                margin: 1rem 0;
                display: block;
            }
        }

        .what-is {
            max-width: 1600px;
            padding: 5%;
            margin: auto;
            background-color: #00447C;
            color: var(--white-text-color);
            line-height: 2rem;

            p {
                margin-top: 1.2rem;
            }

            a {
                color: #62BB20;
            }
        }

        .benefits {
            max-width: 1600px;
            padding: 5%;
            margin: 3rem auto 4rem auto;
            justify-content: center;
            align-items: center;
            line-height: 2rem;

            h2 {
                /* color: var(--blue-text-color); */
            }

            p {
                margin-top: 1.2rem;
            }

            .details {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 1.1rem;
                margin: 2rem;

                .detail {
                    /* border-right: 2px solid #ccc; */
                    max-width: 27rem;
                    text-align: center;

                    &:last-of-type {
                        border-right: none;
                    }

                    img {
                        max-width: 16rem;
                    }

                    h3 {
                        font-style: normal;
                        font-weight: 900;
                        color: var(--green-text-color);
                        text-align: center;
                        font-size: var(--font-size-3xl);
                    }
                }

                ul {
                    max-width: 20rem;

                }
            }
        }

        .questions {
            max-width: 1600px;
            padding: 5%;
            text-align: center;

            header {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: baseline;
                gap: 1rem;
            }

            h2 {

                &.heavy {
                    font-size: var(--font-size-4xl);
                    font-weight: 900;
                }
            }

            h4 {
                font-size: var(--font-size-2xl);
                font-weight: 500;
            }
        }

        .school-benefits {
            max-width: 1600px;
            padding: 5%;
            background-color: #00447C;
            justify-content: center;
            align-items: center;
            line-height: 2rem;
            color: var(--white-text-color);
            line-height: 2rem;
            margin: auto;

            h2 {
                text-align: center;
            }

            div.container {
                display: flex;
                gap: 2rem;
                flex-wrap: wrap;
                justify-content: center;
                /*justify-content: center;
                align-items: center; */

                div {
                    flex-basis: 48%;

                    h3 {
                        margin-top: 1rem;
                        color: var(--green-text-color);
                        font-weight: 900;
                        font-style: normal;
                    }

                    img {
                        margin-top: 1rem;
                    }
                }
            }
        }

        .form-container {
            width: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
            color: #fff;
            margin-top: 2rem;
            padding: 1rem;
            background: url(/wp-content/uploads/2025/04/background-contact-form-1.jpg) no-repeat center/cover;

            .copy {
                flex-basis: 48%;
                min-width: 33rem;
                padding: 1rem;

                h3 {
                    color: #fff;
                    margin-bottom: 1rem;
                }

                p {
                    margin-bottom: 1rem;
                }
            }

            .form {
                flex-basis: 48%;
                min-width: 30rem;
                padding: 1rem;

                .button,
                input[type="submit"] {
                    background-color: #62BB21;
                    color: #fff;
                    padding: 1rem 2rem;
                    font-size: 1.2rem;
                    margin-top: 1rem;
                }

                p {
                    margin-bottom: .5rem;
                }

            }
        }

        .comparison {
            display: flex;
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;

            .copy {
                flex-basis: 32%;
                max-width: 17rem;
                padding-top: 10rem;
                line-height: 150%;

                h2 {
                    line-height: 1.2em;
                    color: var(--blue-text-color);
                }
            }

            .comparison-table {
                flex-basis: 64%;

                th,
                td {
                    text-align: left;
                    padding: .5rem;
                }

                th {
                    background-color: var(--light-gray-background-color);
                }

                .data-row {
                    border-bottom: 5px solid #fff;
                    font-size: .9rem;

                    td {
                        background-color: var(--light-blue-background-color);

                        &:nth-of-type(even) {
                            background-color: var(--light-beige-background-color);

                        }
                    }

                }
            }
        }

        @media screen and (max-width: 600px) {

            .hero,
            .form-container,
            .comparison,
            .school-benefits .container {
                flex-direction: column;
            }

            .hero div,
            .form-container .copy,
            .form-container .form,
            .comparison .copy,
            .comparison .comparison-table {
                flex-basis: 100%;
                max-width: 100%;
            }

            .comparison .copy {
                padding: 1rem;
            }

            .form-container .form input,
            .form-container .form select {
                max-width: 23rem;
            }

            .benefits .details .detail {
                max-width: 100%;
            }

        }
    }
</style>

<main class="r-454c">
    <section class="hero">
        <div style="max-width: 620px;">
            <video autoplay loop muted playsinline width="100%">
                <source src="https://lowtempind.com/wp-content/uploads/2026/01/454c-banner-animation.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div>

            <h3>For Foodservice Leaders</h3>
            <h1>Simplify Your <br>
                Food Wells</h1>
            <h2>Cooling, Maintenance & Sustainability<br> Made Easy</h2>
            <p style="max-width: 38rem;">Serving meaningful meals starts with consistent food well performance
                backed by a <strong>reliable compressor</strong> and an effective <strong>low-GWP refrigerant</strong>.
            </p>

            <a href="#form-container"><button class="button green">Explore the Benefits of R-454C</button></a>

            <span><em>Talk to an Expert About the Facts</em></span>
        </div>


    </section>
    <section class="what-is">
        <h2>What is R-454C?</h2>

        <p>R-454C is a modern refrigerant that provides efficient cooling for low- and medium-temperature refrigeration systems,
            including food wells. It is far less flammable than R-290 (Propane) and offers a significantly lower Global Warming Potential (GWP)
            than R-404A, an older alternative. </p>

        <p>According to ASHRAE safety classifications, R-404A is rated A1 (non-flammable), R-454C is rated A2L (mildly flammable) and R-290 is rated A3 (highly flammable).
            Learn more on <a href="https://www.ashrae.org/file%20library/technical%20resources/bookstore/factsheet_ashrae_english_november2022.pdf" target="_blank">this fact sheet</a>
            or at <a href="https://ashrae.org/" target="_blank">ashrae.org</a>.</p>


    </section>
    <section class="benefits">
        <h2 class="blue-text">Benefits from Startup Through Service</h2>
        <p>Thanks to its A2L rating, R-454C offers greater design flexibility, allowing a single compressor to cool up to six wells.
            In contrast, R-290 (used by most systems) is limited by charge restrictions, typically supporting only one compressor for one or two wells. </p>
        <p>For foodservice environments, R-454C delivers exceptional efficiency,
            lower noise levels and reduced potential for system failure — all while meeting low GWP standards. </p>


        <div class="details">
            <div class="detail">
                <div><img src="/wp-content/uploads/2026/01/icon-hot-cold-applications.gif" alt=""></div>
                <h3>Enable Flexible Operation for Hot, Cold and Frozen Applications</h3>
                <!-- <ul>
                    <li>Easily installs within existing and new LTI counters* </li>
                    <li>No flammable refrigerants training required</li>
                    <li>Frees up under-the-cabinet storage space</li>
                </ul> -->
            </div>
            <div class="detail">
                <div><img src="/wp-content/uploads/2026/01/icon-undercounter-space.gif" alt=""></div>
                <h3>Increase Under-Cabinet Space and Accessibility Due to Fewer Components</h3>
                <!-- <ul>
                    <li>Designed for accessibility and serviceability</li>
                    <li>Simplifies upkeep by the school maintenance</li>
                    <li>Reduces the number of calls to servicing companies</li>
                </ul> -->
            </div>
            <div class="detail">
                <div><img src="/wp-content/uploads/2026/01/icon-maintenance.gif" alt=""></div>
                <h3>Simplify Maintenance with A2L In-Place Service (vs. A3 External Service)</h3>
                <!-- <ul>
                    <li>Maintains freezing temperatures more efficiently than R-290 </li>
                    <li>Exceeds low GWP standards without highly flammable refrigerant</li>
                </ul> -->
            </div>

            <div class="detail">
                <div><img src="/wp-content/uploads/2026/01/icon-reduce-downtime.gif" alt=""></div>
                <h3>Reduce Downtime and Service Complexity with Fewer Components</h3>

            </div>

            <div class="detail">
                <div><img src="/wp-content/uploads/2026/01/icon-high-standards.gif" alt=""></div>
                <h3>Exceed Low-GWP Standards Without Highly Flammable Refrigerants</h3>
            </div>
        </div>


    </section>
    <section class="questions">
        <header>
            <h2 class="blue-text">R-454C integrates easily across LTI systems, which means you can experience the same performance and reliability you have enjoyed for 75 years.</h2>
            <h2 class="heavy blue-text">Questions?</h2>
            <h4>We have the answers.</h4>
        </header>
        <!-- <div>video</div> -->

    </section>
    <!-- <section class="testimonials">
        <h2 class="white-text">What’s Everyone Saying About R-454C?</h2>
        <div class="testimonial">
            <p class="blue-text">
                <strong>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</strong>
            </p>
            <span>Lorem ipsum dolor</span>
        </div>
        <div class="testimonial">
            <p class="green-text">
                <strong>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</strong>
            </p>
            <span>Lorem ipsum dolor</span>
        </div>
        <div class="testimonial">
            <p class="blue-text">
                <strong>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</strong>
            </p>
            <span>Lorem ipsum dolor</span>
        </div>
    </section> -->
    <section class="school-benefits">
        <h2>How Does Your K-12 School Benefit?</h2>
        <div class="container">
            <div><img src="/wp-content/uploads/2026/01/children-at-serving-counter.jpg" alt="Children at serving counter"></div>
            <div>
                <h3>Foodservice Director</h3>
                <p>Consistency in design and operation delivers the same reliability and performance as at the time of installation.</p>
                <h3>Maintenance Technician</h3>
                <p>A2L refrigerants can be reclaimed in place, eliminating the need to move units outdoors to service them in accordance with industry standards.</p>
                <h3>Cafeteria Staff</h3>
                <p>Single condensing unit system reduces run time and noise in the cafeteria environment.</p>
            </div>
        </div>

    </section>
    <section class="comparison">
        <div class="copy">
            <h2>R-454C vs. Other Refrigerants</h2>

            <p>In addition to supporting efficient food well performance, R-454C makes regulatory compliance easier to achieve
                because installation and maintenance are simpler than other low-GWP refrigerants.
                Here’s how it stacks up against the traditional R-404A and the more commonly used R-290.</p>
        </div>
        <div class="comparison-table">

            <table>
                <tr>
                    <td></td>
                    <td><img class="icon" src="/wp-content/uploads/2026/01/icon-r404a.png" alt="R-404-A"></td>
                    <td><img class="icon" src="/wp-content/uploads/2026/01/icon-454c.png" alt="R-454-C"></td>
                    <td><img class="icon" src="/wp-content/uploads/2026/01/icon-r290.png" alt="R-290"></td>


                </tr>
                <tr class="data-row">
                    <th>Compressor Setup</th>
                    <td>1 compressor powers multiple wells</td>
                    <td>1 compressor powers multiple wells</td>
                    <td>Typically, 1 compressor per well</td>
                </tr>
                <tr class="data-row">
                    <th>ASHRAE Safety Classifications</th>
                    <td>A1 (non-toxic, non-flammable)</td>
                    <td>A2L (non-toxic, mildly flammable)</td>
                    <td>A3 (non-toxic, highly flammable)</td>
                </tr>
                <tr class="data-row">
                    <th>GWP Compliance (Currently ≤150)</th>
                    <td>Does not meet GWP Limits (GWP of ~3922)</td>
                    <td>Meets & Exceeds (GWP of ~146)</td>
                    <td>Meets & Exceeds (GWP of ~3)</td>
                </tr>
                <tr class="data-row">
                    <th>Charge Limits</th>
                    <td>Not allowed</td>
                    <td>2,330 grams</td>
                    <td>150 grams*</td>
                </tr>
                <tr class="data-row">
                    <th>Maintenance</th>
                    <td>Straightforward</td>
                    <td>Straightforward</td>
                    <td>Multiple service points and flammable-refrigerant handling</td>
                </tr>
            </table>
        </div>

    </section>


    <section id="form-container" class="form-container">
        <div class="copy">

            <h2>Talk to an Expert About R-454C</h2>

            <p>Navigating evolving regulations and shifting operational requirements can make choosing the right foodservice equipment feel overwhelming. 
            </p>
            <p>At LTI, we take that complexity off your plate. </p>

            <p>From serving system design to low-GWP refrigerants like R-454C, we offer the expertise to help you create a foodservice environment designed for success.</p>

            <p>Questions? Take a few seconds to fill out our form and one of our specialists will reach out to you soon. </p>

        </div>
        <div class="form">
            <?php //echo do_shortcode('[contact-form-7 id="a22f66d" title="Product Contact Form K12"]'); 
            ?>
            <script src="https://js.hsforms.net/forms/embed/50783662.js" defer></script>
            <div class="hs-form-frame" data-region="na1" data-form-id="1e5e7326-aefe-4545-93ca-9dc3a044a001" data-portal-id="50783662"></div>
        </div>

    </section>
</main>

<?php get_template_part('parts/footer'); ?>