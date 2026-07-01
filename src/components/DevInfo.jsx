import { Button, NavLink } from 'reactstrap';

export const DevInfo = () => {
  return (
    <>
      <h1 className="text-center my-5">Sercan ŞİMŞEK</h1>
      <hr
        className="border border-2 border-secondary mx-auto mb-5"
        style={{ width: '40%' }}
      />
      <p className="text-center mx-auto" style={{ width: '60%' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minima
        accusantium est architecto voluptate excepturi dolorum totam non
        necessitatibus fugiat!
      </p>
      <div className="d-flex flex-column align-items-center gap-3 flex-sm-row justify-content-center gap-sm-5 ">
        <Button className="btn px-5 bg-light text-secondary">
          <NavLink href="#">Projects</NavLink>
        </Button>
        <Button className="px-5 bg-black fw-bold btn" style={{ color: '#34E0A1' }}>
          <NavLink href="#">Contact</NavLink>
        </Button>
      </div>
    </>
  );
};
