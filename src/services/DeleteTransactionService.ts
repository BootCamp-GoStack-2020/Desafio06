import { getCustomRepository } from "typeorm";

import AppError from '../errors/AppError';

import Transaction from "../models/Transaction";

import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // Busca no Banco de Dados => Delete
    // Não Existe => Erro
    const transactionsRepository =  getCustomRepository(TransactionRepository);

    const transaction = await transactionsRepository.findOne(id);

    if(!transaction) {
      throw new AppError('Transaction does not exist');
    }

//    const response = await transactionsRepository.remove(transaction);

    await transactionsRepository.remove(transaction);

    return;

  }
}

export default DeleteTransactionService;
