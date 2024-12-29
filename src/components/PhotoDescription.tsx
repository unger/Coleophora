function PhotoDescription({ photo }: { photo: TaxonPhoto }) {
    const className = photo.unsure
        ? "glyphicon glyphicon-question-sign"
        : photo.detMethod == "foto"
          ? "glyphicon glyphicon-exclamation-sign"
          : "glyphicon glyphicon-ok-sign";

    return (
        <p className="text-center">
            §{photo.specimen}{" "}
            <em>
                {photo.latin}
                {photo.unsure && "?"}
            </em>{" "}
            - {photo.name}
            {photo.unsure && "?"}
            {photo.gender === "male" ? <span> &#9794;</span> : photo.gender === "female" ? <span> &#9792;</span> : ""}
            <br />
            {photo.date}, {photo.site} © {photo.photographer}
            <br />
            {photo.detBy && (
                <span>
                    <span className={className}></span>
                    {photo.unsure ? "Artförslag" : "Artbestämd"} {photo.detYear} av {photo.detBy} {photo.detMethod && "via " + photo.detMethod}
                </span>
            )}
        </p>
    );
}

export default PhotoDescription;
