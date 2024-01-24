import { Link } from "react-router-dom";
import { usePhotos } from "../hooks";
import PhotoItem from "./PhotoItem";

interface Props {
    taxon: Taxon;
    stage: Stage;
    groupId?: GroupId;
}

function TaxonGroupedPhoto({ taxon, stage, groupId }: Props) {
    const { isPending, error, data, isFetching } = usePhotos(stage, groupId, taxon.slug, false);

    if (isPending) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    const firstImage = data.length > 0 ? data[0] : undefined;

    return (
        <div>
            <Link to={`/taxon/${taxon.slug}`}>
                <PhotoItem src={firstImage?.image}></PhotoItem>
            </Link>
            <p className="text-center">
                {taxon.redlist !== undefined && <span className="redlist">{taxon.redlist}</span>}
                <b>{taxon.name}</b> <i>{taxon.latin}</i>
            </p>
            {isFetching && <div>Updating...</div>}
        </div>
    );
}

export default TaxonGroupedPhoto;
