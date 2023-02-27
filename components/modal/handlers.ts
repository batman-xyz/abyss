"use client";

export const store = {
  emailAddress: "",
  financialData: "N",
};

export const RequestAccess = () => {
  const modal = document.getElementById("myModal");
  if (!modal) return;
  modal.style.display = "block";
};

export const closeModal = () => {
  const modal = document.getElementById("myModal");
  if (!modal) return;
  modal.style.display = "none";
};

export const closeAnywhere = (evt: any) => {
  const modal = document.getElementById("myModal");
  if (!modal) return;
  if (evt.target == modal) {
    modal.style.display = "none";
  }
};

export const showFinancialOptions = (evt: any) => {
  const no = document.getElementById("no");
  const yes = document.getElementById("yes");
  const fin = document.getElementById("financialDetails");

  if (evt.target == no) {
    if (!fin) return;
    fin.style.display = "none";
  }
  if (evt.target == yes) {
    if (!fin) return;
    fin.style.display = "flex";
    store.financialData = "Y";
  }
};

export const submit = () => {
  console.log(store);
};
