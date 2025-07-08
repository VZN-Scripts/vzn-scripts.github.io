import meta from "../../../pages/_meta.ts";
import vzn_battering_ram_meta from "../../../pages/vzn-battering-ram/_meta.ts";
import vzn_cleanerjob_meta from "../../../pages/vzn-cleanerjob/_meta.ts";
import vzn_death_prison_cell_meta from "../../../pages/vzn-death-prison-cell/_meta.ts";
import vzn_liars_meta from "../../../pages/vzn-liars/_meta.ts";
import vzn_references_meta from "../../../pages/vzn-references/_meta.ts";
export const pageMap = [{
  data: meta
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}, {
  name: "vzn-battering-ram",
  route: "/vzn-battering-ram",
  children: [{
    data: vzn_battering_ram_meta
  }, {
    name: "config",
    route: "/vzn-battering-ram/config",
    frontMatter: {
      "sidebarTitle": "Config"
    }
  }, {
    name: "doorlock",
    route: "/vzn-battering-ram/doorlock",
    frontMatter: {
      "sidebarTitle": "Doorlock"
    }
  }, {
    name: "framework",
    route: "/vzn-battering-ram/framework",
    frontMatter: {
      "sidebarTitle": "Framework"
    }
  }]
}, {
  name: "vzn-battering-ram",
  route: "/vzn-battering-ram",
  frontMatter: {
    "sidebarTitle": "Vzn Battering Ram"
  }
}, {
  name: "vzn-cleanerjob",
  route: "/vzn-cleanerjob",
  children: [{
    data: vzn_cleanerjob_meta
  }, {
    name: "config",
    route: "/vzn-cleanerjob/config",
    frontMatter: {
      "sidebarTitle": "Config"
    }
  }, {
    name: "framework",
    route: "/vzn-cleanerjob/framework",
    frontMatter: {
      "sidebarTitle": "Framework"
    }
  }]
}, {
  name: "vzn-cleanerjob",
  route: "/vzn-cleanerjob",
  frontMatter: {
    "sidebarTitle": "Vzn Cleanerjob"
  }
}, {
  name: "vzn-death-prison-cell",
  route: "/vzn-death-prison-cell",
  children: [{
    data: vzn_death_prison_cell_meta
  }, {
    name: "config",
    route: "/vzn-death-prison-cell/config",
    frontMatter: {
      "sidebarTitle": "Config"
    }
  }, {
    name: "integration",
    route: "/vzn-death-prison-cell/integration",
    children: [{
      name: "esx",
      route: "/vzn-death-prison-cell/integration/esx",
      frontMatter: {
        "sidebarTitle": "Esx"
      }
    }]
  }, {
    name: "integration",
    route: "/vzn-death-prison-cell/integration",
    frontMatter: {
      "sidebarTitle": "Integration"
    }
  }]
}, {
  name: "vzn-death-prison-cell",
  route: "/vzn-death-prison-cell",
  frontMatter: {
    "sidebarTitle": "Vzn Death Prison Cell"
  }
}, {
  name: "vzn-liars",
  route: "/vzn-liars",
  children: [{
    data: vzn_liars_meta
  }, {
    name: "config",
    route: "/vzn-liars/config",
    frontMatter: {
      "sidebarTitle": "Config"
    }
  }]
}, {
  name: "vzn-liars",
  route: "/vzn-liars",
  frontMatter: {
    "sidebarTitle": "Vzn Liars"
  }
}, {
  name: "vzn-notify",
  route: "/vzn-notify",
  children: [{
    name: "api",
    route: "/vzn-notify/api",
    frontMatter: {
      "sidebarTitle": "API"
    }
  }, {
    name: "designs",
    route: "/vzn-notify/designs",
    frontMatter: {
      "sidebarTitle": "Designs"
    }
  }, {
    name: "Integration",
    route: "/vzn-notify/Integration",
    children: [{
      name: "esx",
      route: "/vzn-notify/Integration/esx",
      frontMatter: {
        "sidebarTitle": "Esx"
      }
    }, {
      name: "ox_lib",
      route: "/vzn-notify/Integration/ox_lib",
      frontMatter: {
        "sidebarTitle": "Ox Lib"
      }
    }, {
      name: "qb-core",
      route: "/vzn-notify/Integration/qb-core",
      frontMatter: {
        "sidebarTitle": "Qb Core"
      }
    }]
  }]
}, {
  name: "vzn-notify",
  route: "/vzn-notify",
  frontMatter: {
    "sidebarTitle": "Vzn Notify"
  }
}, {
  name: "vzn-references",
  route: "/vzn-references",
  children: [{
    data: vzn_references_meta
  }, {
    name: "config",
    route: "/vzn-references/config",
    frontMatter: {
      "sidebarTitle": "Config"
    }
  }, {
    name: "custom_reward",
    route: "/vzn-references/custom_reward",
    frontMatter: {
      "sidebarTitle": "Custom Reward"
    }
  }, {
    name: "framework",
    route: "/vzn-references/framework",
    frontMatter: {
      "sidebarTitle": "Framework"
    }
  }]
}, {
  name: "vzn-references",
  route: "/vzn-references",
  frontMatter: {
    "sidebarTitle": "Vzn References"
  }
}];