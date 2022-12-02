import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

function Aseel() {
    return <div className="bg-green py-10">
        <div className="md:container md:mx-auto px-4">
            <div className="columns">
                <h1 className="text-center my-5 section-name">
                    ASEEL Responds to the Ongoing Crisis in Afghanistan
                </h1>
                <div>
                    <p className="my-6">Aseel was established out of Afghanistan four years ago. Since then, we have worked tirelessly to grow Afghanistan’s artisan sectors and local economics, harnessing e-commerce technology and a diverse, young team. To date, we have supported more than 40 handicraft businesses and sold over 10,000 Afghan handmade products to customers in the US, Australia, and the UK. As The Taliban overtook Kabul on August 15, we shifted our operations to help people affected by the conflict because our mission has always been to support Afghanistan.</p>
                    <p className="my-6">We launched Aseel Emergency Response to allow people inside and outside Afghanistan to purchase necessary aid packages for families in need. The packages include emergency food, baby care, life, first-aid, and winter packages. The platform also allows people to donate a certain amount of money so Aseel can purchase the packages that war-affected people need inside Afghanistan. We have our functional teams of volunteers in 24 provinces who are active in identifying and assisting beneficiaries in need. Anyone anywhere in the world can download the Aseel iOS and Android mobile applications OR go straight to the Aseel website to start contributing directly to the war-affected families. Our team on the ground ensures that these packages you buy are delivered directly to those in need.</p>
                    <p className="my-6">Moreover, you can sponsor and help families in Afghanistan by filling out the beneficiary forms. Each beneficiary registered within the Aseel platform will be assigned an Omid ID and receive an Omid card. This is our approach to having full visibility on who we are helping, and beneficiaries can use their Omid cards to contact Aseel in the future as they require assistance given the winter crisis, medical support, or anything else that can save a human life. The Omid cards are the most important aspect of our work because this leads to our plan of creating a people-run mobile platform that anyone (Donors, organizations, volunteers, shops, beneficiaries, and the Afghan youth) can contribute to save our people.</p>
                    <p className="my-6">Through our platform, people can start their own campaigns/fundraisers to support the people of Afghanistan. You can create a campaign and raise funds for the war-affected people of a specific province or any other cause related to food security and child malnutrition. If you wish to become a volunteer with us and help the people of Afghanistan, fill out our volunteer forms. Our volunteers are the heroes who advocate for the vulnerable people of Afghanistan and save their lives by either distributing the aid packages and identifying beneficiaries on the ground or raising awareness on the ongoing crisis and Aseel efforts on the humanitarian crisis. </p>
                    <ul className="my-6  ml-6">
                        <li>If you want to start a campaign with us and do not know how to do that, contact sediqa@aseelapp.com</li>
                        <li>If you know someone in media who would be interested in covering the ongoing efforts of Aseel in response to the crisis, contact zahra@aseelapp.com</li>
                        <li>For queries regarding the beneficiaries and donations, contact Ihsan@aseelapp.com</li>
                    </ul>
                    <p className="my-6">To beat this crisis, we need to be united, and together we can create an impact to save Afghan peoples’ lives.</p>
                    <div className="flex justify-center">
                        <button className="btn-success">
                            <FontAwesomeIcon icon={faPlayCircle} style={{ color: "white" }} /> Watch
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Aseel