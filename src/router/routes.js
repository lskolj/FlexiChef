const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "detalji_recepta",
        component: () => import("pages/DetaljiRecepta.vue"),
      },
      { path: "favourites", component: () => import("pages/Favourites.vue") },
      {
        path: "lista_recepata",
        component: () => import("pages/ListaRecepata.vue"),
      },
      { path: "login", component: () => import("pages/LoginPage.vue") },
      {
        path: "pretraga_korisnika",
        component: () => import("pages/PretragaKorisnika.vue"),
      },
      {
        path: "pretraga_recepata",
        component: () => import("pages/PretrazivanjeRecepata.vue"),
      },
      { path: "profil", component: () => import("pages/ProfilPage.vue") },
      {
        path: "registracija",
        component: () => import("pages/RegisterPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
