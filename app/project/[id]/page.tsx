const page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <>
      <h1>Project id: {id} </h1>
    </>
  );
};

export default page;
