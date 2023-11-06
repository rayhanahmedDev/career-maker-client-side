

const Faq = () => {
    return (
        <div>
            <div className="mb-12 w-9/12 mx-auto">
                <div className="my-12">
                    <h2 className="text-4xl font-bold text-center"> WE ANSWERED SOME POPULAR QUESTIONS </h2>
                </div>
                <div className="collapse collapse-arrow bg-base-100 py-8 shadow-xl mb-6">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-2xl font-bold ">
                    What is the Free Tour Community?
                    </div>
                    <div className="collapse-content">
                        <p>The Free Tour Community is a worldwide family of 80+ local free tour initiatives operating in 40+ countries. We are incredibly proud of our cities, and our mission to help you discover them from a  point of view. We deliver top-rated, quality-oriented free walking tours and promote the pay-what-you-wish concept around the world.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 py-8 shadow-xl mb-6">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-2xl font-bold ">
                    How do I know if a free tour operator is part of the Free Tour Community
                    </div>
                    <div className="collapse-content">
                        <p>Look for the logo of the Community on the landing page of the free tour website. Alternatively, you can just go to freetourcommunity.com and see if the company is on our partner list for the given city.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 py-8 shadow-xl mb-6">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-2xl font-bold ">
                    Why joining a tour with the Free Tour Community is the best option?
                    </div>
                    <div className="collapse-content">
                        <p>The Community only accepts the best-rated free tour companies who put the satisfaction of their guests first, so you can be sure the tour will not be a disappointment. Free Tour Community companies have an average rating of 5 stars on TripAdvisor. Additionally, they are all local companies, so going on one of the tours found here supports the local economy. You get the best, and so does the city!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;