const page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <>
      <h1 className="font-pops">{id}</h1>
    </>
  );
};

export default page;
