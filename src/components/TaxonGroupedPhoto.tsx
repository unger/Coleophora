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

    function GetFirstImage(data: TaxonPhoto[], gender: Gender | undefined): TaxonPhoto | undefined {
        let filteredData = data;
        if (gender !== undefined) {
            filteredData = filteredData.filter((item) => item.gender === gender);
        }
        return filteredData.length > 0 ? filteredData[0] : undefined;
    }

    return taxon.dimorphism && stage === "imago" ? (
        <>
            <div>
                <Link to={`/taxon/${taxon.slug}`}>
                    <PhotoItem src={GetFirstImage(data, "male")?.image}></PhotoItem>
                </Link>
                <p className="text-center">
                    {taxon.redlist !== undefined && <span className="redlist">{taxon.redlist}</span>}
                    <b>{taxon.name}</b> <i>{taxon.latin}</i> &#9794;
                </p>
                {isFetching && <div>Updating...</div>}
            </div>
            <div>
                <Link to={`/taxon/${taxon.slug}`}>
                    <PhotoItem src={GetFirstImage(data, "female")?.image}></PhotoItem>
                </Link>
                <p className="text-center">
                    {taxon.redlist !== undefined && <span className="redlist">{taxon.redlist}</span>}
                    <b>{taxon.name}</b> <i>{taxon.latin}</i> &#9792;
                </p>
                {isFetching && <div>Updating...</div>}
            </div>
        </>
    ) : (
        <div>
            <Link to={`/taxon/${taxon.slug}`}>
                <PhotoItem src={GetFirstImage(data, undefined)?.image}></PhotoItem>
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
