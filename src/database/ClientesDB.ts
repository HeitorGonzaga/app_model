import * as SQLite from "expo-sqlite";

import IClientes from "../interfaces/IClientes";

const db = SQLite.openDatabase("frigo.db");

//Função para apagar a tabela
export function dropTable() {
  return new Promise((resolve) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "drop table clientes;"
        );
      },
      (err) => {
        resolve(false);
      },
      () => {
        resolve(true);
      }
    );
  });
}


//Mapeado uma tabela do webfrigo para teste
export function createTable() {
  return new Promise((resolve) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table clientes (" +
            "codigo_cadastro integer primary key not null, " +
            "codigo_empresas integer not null, " +
            "codigo_vendedor integer not null, " +
            "tipo_pessoa text not null, " +
            "cpf_cnpj_editado text not null, " +
            "inscri_estadual text not null, " +
            "inscri_municipal text not null, " +
            "razao_social text not null, " +
            "fantasia text not null, " +
            "dddres text, " +
            "telres text, " +
            "dddcel text, " +
            "telcel text, " +
            "dddcom text, " +
            "telcom text, " +
            "email text, " +
            "contato text, " +
            "codigo_ceps text, " +
            "codigo_municipio integer, " +
            "logradouro text, " +
            "complemento text, " +
            "bairro text, " +
            "cidade text, " +
            "estado text, " +
            "pais text, " +
            "latitude text, " +
            "longitude text, " +
            "tipo_tabela_preco text, " +
            "limite_maximo REAL, " +
            "limite_credito REAL, " +
            "limite_utilizado REAL, " +
            "conceito text, " +
            "ultima_compra text, " +
            "condicao_pagto integer, " +
            "descricao_condicao text, " +
            "tipo_condicao text, " +
            "parcelas integer, " +
            "tipo_tabela text)"
        );
      },
      (err) => {
        resolve(false);
      },
      () => {
        resolve(true);
      }
    );
  });
}


export function add(cliente: IClientes): Promise<boolean> {
  const {
    codigo_empresas,
    codigo_cadastro,
    codigo_vendedor,
    tipo_pessoa,
    cpf_cnpj_editado,
    inscri_estadual,
    inscri_municipal,
    razao_social,
    fantasia,
    dddres,
    telres,
    dddcel,
    telcel,
    dddcom,
    telcom,
    email,
    contato,
    codigo_ceps,
    codigo_municipio,
    logradouro,
    complemento,
    bairro,
    cidade,
    estado,
    pais,
    latitude,
    longitude,
    tipo_tabela_preco,
    limite_maximo,
    limite_credito,
    conceito,
    condicao_pagto,
    descricao_condicao,
    tipo_condicao,
    parcelas,
    tipo_tabela,
    limite_utilizado,
    ultima_compra
  } = cliente;
  return new Promise((resolve) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `insert into 
            clientes(
              codigo_empresas,
              codigo_cadastro,
              codigo_vendedor,
              tipo_pessoa,
              cpf_cnpj_editado,
              inscri_estadual,
              inscri_municipal,
              razao_social,
              fantasia,
              dddres,
              telres,
              dddcel,
              telcel,
              dddcom,
              telcom,
              email,
              contato,
              codigo_ceps,
              codigo_municipio,
              logradouro,
              complemento,
              bairro,
              cidade,
              estado,
              pais,
              latitude,
              longitude,
              tipo_tabela_preco,
              limite_maximo,
              limite_credito,
              conceito,
              condicao_pagto,
              descricao_condicao,
              tipo_condicao,
              parcelas,
              tipo_tabela,
              limite_utilizado,
              ultima_compra
              ) 
            values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, 
            [
              codigo_empresas,
              codigo_cadastro,
              codigo_vendedor,
              tipo_pessoa,
              cpf_cnpj_editado,
              inscri_estadual,
              inscri_municipal,
              razao_social,
              fantasia,
              dddres,
              telres,
              dddcel,
              telcel,
              dddcom,
              telcom,
              email,
              contato,
              codigo_ceps,
              codigo_municipio,
              logradouro,
              complemento,
              bairro,
              cidade,
              estado,
              pais,
              latitude,
              longitude,
              tipo_tabela_preco,
              limite_maximo,
              limite_credito,
              conceito,
              condicao_pagto,
              descricao_condicao,
              tipo_condicao,
              parcelas,
              tipo_tabela,
              limite_utilizado,
              ultima_compra
            ]
        );
      },
      (err) => {
        resolve(false);
      },
      () => {
        resolve(true);
      }
    );
  });

}