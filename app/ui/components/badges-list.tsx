export default function BadgesList({ badges }: { badges: any }) {
    return (
      <>
        {badges.map((badge: any) => {
          return (
            <img
                key={badge.id}
                className={badge.classname}
                src={badge.src}
                alt={badge.alt}
            ></img>
          );
        })}
      </>
    );
  }
  