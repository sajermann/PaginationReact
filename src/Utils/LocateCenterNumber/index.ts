const currentPage = 49;
const totalPages= 50;
const siblingCount= 3

type Props = {
	currentPage: number;
	totalPages: number;
	siblingCount: number;
};

export default function CentralNunmber({
	currentPage,
	totalPages,
	siblingCount,
}: Props): number[] {
	// if (currentPage === 1 || currentPage === totalPages) {
	// 	return [];
	// }
  if(currentPage === totalPages){
    console.log('Condição sdafas')
    if(totalPages < siblingCount){
      return []
    }
    if(totalPages > siblingCount){
      return [currentPage - siblingCount - 1]
    }
  }

  if(currentPage < totalPages){
    console.log('Condição eqweqw'){

    }
  }

  if(currentPage + siblingCount < totalPages){
    console.log('Condição qauisdhuhsdauha')
    return [currentPage - siblingCount - 1]
  }

  if (currentPage === 1) {
    console.log('Condição 2')
		if(currentPage + siblingCount < totalPages){
      return [currentPage + siblingCount + 1]
    }
	}
  if(currentPage + siblingCount > 1 + 1 && currentPage + siblingCount < totalPages - 1){
    console.log('Condição 3')
    if(currentPage + siblingCount > 1 + 1){
      return [currentPage]
    }
    if(currentPage + siblingCount < totalPages - 1){
      return [currentPage]
    }
  }
	return [currentPage];
}



 // console.log(CentralNunmber({currentPage,totalPages, siblingCount }))
