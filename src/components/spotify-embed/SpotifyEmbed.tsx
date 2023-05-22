const SpotifyEmbed = () => {
  return (
    <div className='hidden overflow-hidden bg-bg-light text-lg dark:divide-gray-500 dark:bg-bg-dark md:block'>
      <iframe
        src='https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator&theme=0'
        width='100%'
        height='152'
        frameBorder='0'
        allowFullScreen={false}
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      ></iframe>
    </div>
  );
};

export default SpotifyEmbed;
