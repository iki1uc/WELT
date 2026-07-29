document.body.dataset.welt = "WELT.core::WELT.layer::WELT.portal";
welt: "WELT.core"
welt: {
    core: "WELT.core",
    boot: "WELT.boot",
    portal: "PORTAL.ROM",
    layer: "WELT.layer",
    sync: "WELT.sync",
    room: "welt.room"
}
RESPO.welt("portal");
RESPO.welt("layer");
RESPO.welt("room");
RESPO.welt("sync");
<div id="welt"></div>

<script type="module">
import "./continium.js";

const welt = document.body.dataset.welt;
document.getElementById("welt").textContent =
    "WELT‑Node: " + welt;
</script>
