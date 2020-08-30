// import AppError from '../errors/AppError';

import { getCustomRepository, getRepository } from 'typeorm';

import TransactionsRepository from '../repositories/TransactionsRepository';

import Transaction from '../models/Transaction';

import Category from '../models/Category';


interface  Request {
  title: string;
  type: 'income' | 'outcome';
  value: number;
  category: string;
}


class CreateTransactionService {
  public async execute({ 
    title, 
    value, 
    type, 
    category
  }: Request ): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const categoryRepository = getRepository(Category);
    

    // Verificar se a categoria já existe


    // Existe ? Busca no Banco de Dados e usar o id que foi retornado

    // !Existe ? Cria Ela


    const transaction = transactionsRepository.create({
      title,
      value,
      type,
    })

    await transactionsRepository.save(transaction);

    return transaction;
  }


}

export default CreateTransactionService;
