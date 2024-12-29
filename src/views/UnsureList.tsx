import { Link } from "react-router-dom";
import { usePhotos } from "../hooks";
import PhotoItem from "../components/PhotoItem";

function UnsureList() {
    const { isPending, error, data, isFetching } = usePhotos("imago", undefined, undefined, true, (item) => item.slug);

    if (isPending) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <div>
            <h1>
                Osäkra säckmalar{" "}
                <small>
                    <em>Coleophoridae</em>
                </small>
            </h1>
            <div className="small-thumbnails">
                {data.map((item: TaxonPhoto) => {
                    return (
                        <div key={item.bildId}>
                            <Link to={`/unsure/${item.slug}`}>
                                <PhotoItem src={item.image}></PhotoItem>
                            </Link>
                            <p className="text-center">
                                <b>
                                    {item.name}
                                    {item.unsure && "?"}
                                </b>{" "}
                                <i>
                                    {item.latin}
                                    {item.unsure && "?"}
                                </i>
                            </p>
                        </div>
                    );
                })}
            </div>
            {isFetching && <div>Updating...</div>}
        </div>
    );
}

export default UnsureList;
