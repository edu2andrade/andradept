import { useState } from "react";
import { Burguer } from "./Burguer";

// Criar Menu (responsive) Burguer está dentro desse componente e renderiza condicionalmente
// (Mobile ou Desktop) --> https://stackoverflow.com/questions/46586165/react-conditionally-render-based-on-viewport-size

// O Menu será diferente em desktop e mobile??? *IMPORTANT* melhor que seja o mesmo só que responsivo né?

export const Menu = () => {
  const [open, setOpen] = useState(false);

  return <Burguer open={open} setOpen={setOpen} />;
};
