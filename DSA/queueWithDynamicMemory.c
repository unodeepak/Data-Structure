#include <stdio.h>
#include <stdlib.h>

/* Queue with Dynamic Memory Allocation */
int storeValueInQueue(int arr[], int *top, int size)
{
  if (*top == size)
  {
    printf("\n\n===> Queue is Overflow <===\n\n");
    return 0;
  }
  int n;
  printf("\n=======> Enter Any Number: ");
  scanf("%d", &n);

  arr[*top] = n;
  *top = *top + 1;

  return 1;
}

int deleteValueInQueue(int arr[], int *rear, int *top)
{
  if (*rear == *top)
  {
    *rear = *top = 0;
    printf("\n\n=====> Queue is Empty\n==========>");
    return 1;
  }
  arr[*rear] = '\0';
  *rear = *rear + 1;

  if (*rear == *top) {
    *rear = *top = 0;
  }
  
  return 1;
}

int display(int arr[], int *top, int *rear)
{
  if (*rear == *top)
  {
    printf("\n\n=====> Queue is Empty==========>\n");
    return 1;
  }

  for (int i = *rear; i < *top; i++)
  {
    printf("%d ", arr[i]);
  }

  printf("\n\n");
  return 1;
}

void main()
{
  int size;
  printf("Enter the size of array : ");
  scanf("%d", &size);

  int *ptr = (int *)malloc(size * sizeof(int));
  int rear = 0, top = 0;

  while (1)
  {
    int num, flag = 0;
    printf("\n1. Insert\n2. Delete\n3. Display\n4.Quite\nEnter the Given Number: ");
    scanf("%d", &num);

    switch (num)
    {
    case 1:
      storeValueInQueue(ptr, &top, size);
      break;

    case 2:
      deleteValueInQueue(ptr, &rear, &top);
      break;

    case 3:
      display(ptr, &top, &rear);
      break;

    case 4:
      flag = 1;
      break;

    default:
      printf("\n==> Plz. enter above given number\n\n");
      break;
    }

    if (flag)
      break;
  }

  free(ptr);
}