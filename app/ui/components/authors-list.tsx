export default function AuthorsList( {authors}: {authors : any}) {
    return (
        <>
          {authors.map((author: any) => {
            return (
                <div className="mb-2">
                    <p className="text-gray">{author.name}</p>
                    <p className="text-gray-600">{author.position}</p>
                </div>
            );
          })}
        </>
      );
  }