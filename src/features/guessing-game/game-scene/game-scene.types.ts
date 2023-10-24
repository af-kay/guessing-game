import { IGameConfigMenu } from '../game-config/game-config.types';

export type IGameScene = Required<Pick<IGameConfigMenu, 'additionalButtons'>>;
