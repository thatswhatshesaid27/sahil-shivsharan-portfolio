const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center overflow-hidden">
      <video
        src="/assets/Hero_section_animation.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default Hero;
