import os from "node:os"

function getENX() {
  const interfaces = os.networkInterfaces();

  return Object.keys(interfaces).find(
    name =>
      name.startsWith("enx") &&
      interfaces[name]?.some(i => !i.internal)
  );
}


export async function readFileENX(fn) {
  try {
    let enxG = getENX();

   try{ enxG = enxG.replace(":", "").trim() }catch{ console.error("")}

    let interfaceNetwork = []
    interfaceNetwork = fn()

    const iface = interfaceNetwork?.[enxG]?.[0];

    if (!iface) {
      console.log("this not connecting internet...\n");
      return;
    } 
      console.log(`IP: ${iface.address}`);
      console.log(`Netmask: ${iface.netmask}`);
      console.log(`Type IP: ${iface.family}`);
      console.log(`MAC: ${iface.mac}`);
      console.log(`CIDR: ${iface.cidr}\n`);

  } catch (error) {
    console.error(error)
    return null;
  }
}
